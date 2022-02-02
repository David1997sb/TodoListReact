import React, { useState } from "react";

//create your first component
const Home = () => {
	const [userInput, setInputValue] = useState("");
	const [userList, setListtValue] = useState([]);

	function test(e) {
		e.preventDefault();
		setListtValue([...userList, { id: userList.length, name: userInput }]);
	}

	function removeItem(id) {
		const newList = userList.filter((item) => item.id !== id);
		setListtValue(newList);
		console.log("deberia de borrar");
	}

	return (
		<div>
			<form onSubmit={test}>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="What needs to be done"
						aria-describedby="button-addon2"
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<button
						className="btn btn-outline-secondary"
						type="submit"
						id="button-addon2">
						Mark as todo
					</button>
				</div>
			</form>
			<ul>
				{userList.map((item, index) => (
					<>
						<li key={item.id}>
							<span>
								<i
									className="fa fa-trash"
									onClick={() => removeItem(item.id)}></i>
							</span>
							{item.name}
						</li>
					</>
				))}
			</ul>
			<p>{userList.length} items left</p>
		</div>
	);
};

export default Home;
