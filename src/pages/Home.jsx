import React from 'react';
import { HashRouter, Route, Routes, useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'

export default function Home() {

	const navigate = useNavigate();

  return (
	<div>
		<h1>Home</h1>
		<Button
			onClick={() => {
				navigate('/game');
			}}
		>
			Game
		</Button>
	</div>
  );
}
