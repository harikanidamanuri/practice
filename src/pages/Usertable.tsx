import React, { useEffect, useState } from "react"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table"
import { FaEdit, FaTrash, FaSave, FaTimes, FaPlus } from "react-icons/fa"

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

	// New post state
	const [newTitle, setNewTitle] = useState<string>("")
	const [newBody, setNewBody] = useState<string>("")

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch("https://jsonplaceholder.typicode.com/posts")
				const data = await response.json()
				setPosts(data.slice(0, 100)) // Initially load 100 posts for demo
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

	// Add new post handler with sequential ID
	const handleAddPost = () => {
		if (newTitle && newBody) {
			// Find the maximum ID in the existing posts and increment it by 1 for the new post
			const maxId = Math.max(...posts.map(post => post.id), 0)
			const newPost = {
				id: maxId + 1,  // New post ID is the max ID from existing posts + 1
				title: newTitle,
				body: newBody,
			}
			setPosts((prev) => [...prev, newPost])  // Adds the new post at the bottom
			setNewTitle("")  // Clear the input fields
			setNewBody("")
		} else {
			alert("Please provide both title and body.")
		}
	}

	if (loading) return <div style={{ padding: "2rem" }}>Loading...</div>

	return (
		<div style={{ margin: "2rem", padding: "1rem", borderRadius: "8px" }}>
			{/* Add New Post Section */}
			<div style={{ marginBottom: "1rem" }}>
				<input
					type="text"
					placeholder="Title"
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
					style={{ padding: "0.5rem", marginRight: "0.5rem", width: "200px" }}
				/>
				<input
					type="text"
					placeholder="Body"
					value={newBody}
					onChange={(e) => setNewBody(e.target.value)}
					style={{ padding: "0.5rem", marginRight: "0.5rem", width: "300px" }}
				/>
				<button
					onClick={handleAddPost}
					style={{
						padding: "0.5rem 1rem",
						backgroundColor: "#4CAF50",
						color: "white",
						border: "none",
						cursor: "pointer",
					}}
				>
					<FaPlus /> Add Post
				</button>
			</div>

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
