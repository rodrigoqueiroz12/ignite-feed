import { PencilSimpleLine } from "phosphor-react"
import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar"

export function Sidebar() {
	return (
		<aside className={styles.aside}>
			<img
				className={styles.backgroundImage}
				src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
			/>

			<div className={styles.content}>
				<Avatar src={"https://github.com/rodrigoqueiroz12.png"} />
				<strong>
                    <a href="#">Rodrigo Queiroz</a>
                </strong>
				<span>Web Developer</span>
			</div>

			<footer className={styles.footer}>
				<a href="#">
					<PencilSimpleLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	)
}
