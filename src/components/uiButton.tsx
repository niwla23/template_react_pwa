type Props = {
  onClick: () => void
  children: JSX.Element | JSX.Element[] | string
  className?: string
}

export default function UiButton(props: Props) {
  let style = `bg-orange-600 hover:bg-orange-800 transition-all p-2 ${props.className}`

  return (
    <button onClick={props.onClick} className={style}>
      {props.children}
    </button>
  )
}
