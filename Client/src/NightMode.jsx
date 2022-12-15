import React from "react";
import styled, { css } from 'styled-components';
import '../dist/styles.css';

const NightModeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NightModeText = styled.a`
	position: relative;
	color: white;
`;

const NightModeButtonWrapper = styled.div`
	align-self: center;
	margin: 0px 10px 20px 10px;
	position: relative;
`;

const NightMode = ({ nightMode, setNightMode }) => {

	return (
    <NightModeContainer>
			<NightModeText>Dark Mode</NightModeText>
			<NightModeButtonWrapper>
				<input
					className="react-switch-checkbox"
					id={`react-switch-new`}
					type="checkbox"
					onChange={() => setNightMode(!nightMode)}
				/>
				<label
					className="react-switch-label"
					htmlFor={`react-switch-new`}
				>
					<span className={`react-switch-button`} />
				</label>
			</NightModeButtonWrapper>

    </NightModeContainer>
  );
};

export default NightMode;
