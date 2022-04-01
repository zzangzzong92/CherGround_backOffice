import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ModalDefaultType {
	onClickToggleModal: () => void;
}

interface ModalSize {
	width: string;
	height: string;
	margin: string;
}

function Modal({
	onClickToggleModal,
	children,
	width,
	height,
	margin
}: PropsWithChildren<ModalDefaultType> & ModalSize) {
	return (
		<ModalContainer>
			<DialogBox isWidth={width} isHeight={height} isMargin={margin}>
				{children}
			</DialogBox>
			<Backdrop
				onClick={(e: React.MouseEvent) => {
					e.preventDefault();

					if (onClickToggleModal) {
						onClickToggleModal();
					}
				}}
			/>
		</ModalContainer>
	);
}

const ModalContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100%;
	height: 100%;
`;

const DialogBox = styled.dialog<{
	isWidth: string;
	isHeight: string;
	isMargin: string;
}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${(props) => (props.isWidth ? props.isWidth : "448px")};
	height: ${(props) => (props.isHeight ? props.isHeight : "610px")};
	margin: ${(props) => (props.isMargin ? props.isMargin : "0 auto")};
	border: none;
	border-radius: 3px;
	background-color: white;
	box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
	box-sizing: border-box;
	z-index: 100;
`;

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
`;

export default Modal;