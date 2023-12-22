import React from "react"
import {History as HistoryInterface} from "../../interfaces/history"
import {Ps1} from "../ps1"
import {Message} from "ai/react"

type JSONValue =
  | string
  | number
  | boolean
  | {[x: string]: JSONValue}
  | Array<JSONValue>

interface HistoryItem extends HistoryInterface {
  type: "history"
}

interface MessageItem extends Message {
  type: "message"
  date: Date | undefined
}

type MixedHistoryItem = HistoryItem | MessageItem

interface Props {
  history: Array<HistoryInterface>
  messages: Array<Message>
}

export const History: React.FC<Props> = ({history, messages}) => {
  // console.log(messages)

  const mixedHistory: Array<MixedHistoryItem> = [
    ...history.map((h) => ({...h, type: "history" as const})),
    ...messages.map((m) => ({
      ...m,
      type: "message" as const,
      date: m.createdAt,
    })),
  ]
  // console.log(mixedHistory)

  // console.log(
  //   mixedHistory.sort(
  //     (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  //   ),
  // )
  mixedHistory.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  )

  return (
    <>
      {mixedHistory.map((item, index) => (
        <div key={index}>
          {item.type === "history" ? (
            // Render history item
            <div>
              <Ps1 />
              <div className="inline">{item.command}</div>
              <p
                className="whitespace-pre-wrap mb-2"
                style={{lineHeight: "normal"}}
                dangerouslySetInnerHTML={{__html: item.output}}
              />
            </div>
          ) : (
            // Render message item
            <div>
              {item.role === "assistant" ? (
                <p className="text-right pt-12 pr-6 resLy"> - Lyra Haruto</p>
              ) : (
                <Ps1 />
              )}
              {item.role === "assistant"
                ? item.content.split("\n").map((line, lineIndex) => (
                    <p className="text-right pt-2 pr-6 pb-6" key={lineIndex}>
                      {line}
                    </p>
                  ))
                : item.content.split("\n").map((line, lineIndex) => (
                    <p className="lyra inline" key={lineIndex}>
                      {line}
                    </p>
                  ))}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default History

// // Filtering mixedHistory based on the current input value
// const relevantHistory = mixedHistory.filter(entry =>
//   commandExists(value) ? entry.type === 'command' : entry.type === 'message'
// );

// const mixedHistory = [...history, ...messages.map(m => ({ command: m.role === "user" ? m.content : "", output: m.content }))]
// console.log(mixedHistory);
