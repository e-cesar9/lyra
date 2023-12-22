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

export const History: React.FC<Props> = ({history}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <p
            className="whitespace-pre-wrap mb-2"
            style={{lineHeight: "normal"}}
            dangerouslySetInnerHTML={{__html: entry.output}}
          />
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
