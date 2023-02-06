import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

type Props = {
  name: string
}

export default function Greeter(props: Props) {
  return (
    <div className="alert alert-success shadow-lg">
      <div>
        <FontAwesomeIcon icon={faCheckCircle} />
        <span>Hey {props.name}, I am a component</span>
      </div>
    </div>
  )
}
