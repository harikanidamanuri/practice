import React, { useEffect, useState } from "react"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table"
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa"

interface Post {
	id: number
	title: string
	body: string
}

export default function UserTable() {
	const [posts, setPosts] = useState<Post[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [editingPostId, setEditingPostId] = useState<number | null>(null)
	const [editedTitle, setEditedTitle] = useState<string>("")
	const [editedBody, setEditedBody] = useState<string>("")

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/posts")
				const data = await response.json()
				setPosts(data.slice(0,100))
			} catch (error) {
				console.error("Failed to fetch posts:", error)
			} finally {
				setLoading(false)
			}
		}

		fetchPosts()
	}, [])

	const handleDelete = (id: number) => {
		setPosts((prev) => prev.filter((post) => post.id !== id))
	}

	const handleEdit = (post: Post) => {
		setEditingPostId(post.id)
		setEditedTitle(post.title)
		setEditedBody(post.body)
	}

	const handleSave = (id: number) => {
		setPosts((prev) =>
			prev.map((post) =>
				post.id === id ? { ...post, title: editedTitle, body: editedBody } : post
			)
		)
		setEditingPostId(null)
	}

	const handleCancel = () => {
		setEditingPostId(null)
		setEditedTitle("")
		setEditedBody("")
	}

	if (loading) return <div style={{ padding: "2rem" }}>Loading...</div>

	return (
		<div style={{ margin: "2rem", padding: "1rem", borderRadius: "8px" }}>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>ID</TableHead>
						<TableHead>Title</TableHead>
						<TableHead>Body</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{posts.map((post) => (
						<TableRow key={post.id}>
							<TableCell>{post.id}</TableCell>

							<TableCell>
								{editingPostId === post.id ? (
									<input
										value={editedTitle}
										onChange={(e) => setEditedTitle(e.target.value)}
										style={{ width: "100%" }}
									/>
								) : (
									post.title
								)}
							</TableCell>

							<TableCell>
								{editingPostId === post.id ? (
									<input
										value={editedBody}
										onChange={(e) => setEditedBody(e.target.value)}
										style={{ width: "100%" }}
									/>
								) : (
									post.body
								)}
							</TableCell>

							<TableCell>
								<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
									{editingPostId === post.id ? (
										<>
											<FaSave
												onClick={() => handleSave(post.id)}
												style={{
													color: "green",
													cursor: "pointer",
													fontSize: "1.2rem",
												}}
												title="Save"
											/>
											<FaTimes
												onClick={handleCancel}
												style={{
													color: "gray",
													cursor: "pointer",
													fontSize: "1.2rem",
												}}
												title="Cancel"
											/>
										</>
									) : (
										<>
											<FaEdit
												onClick={() => handleEdit(post)}
												style={{
													color: "blue",
													cursor: "pointer",
													fontSize: "1.2rem",
												}}
												title="Edit"
											/>
											<FaTrash
												onClick={() => handleDelete(post.id)}
												style={{
													color: "red",
													cursor: "pointer",
													fontSize: "1.2rem",
												}}
												title="Delete"
											/>
										</>
									)}
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
