import { ImgHTMLAttributes } from "react"

import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <a
      href="#"
      className={hasBorder ? styles.profileWithBorder : styles.profile}
    >
      <img {...props} />
    </a>
  )
}
