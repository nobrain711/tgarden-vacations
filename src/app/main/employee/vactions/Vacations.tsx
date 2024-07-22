import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/styles';
import { memo, useState } from 'react';
import Button from '@mui/material/Button';
import { VacationsTabs } from './tabs/VacationsTabs';
import { VacationSidebarContent } from './sidebar/VacationSidebarContent';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: '#FFF',
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.divider
	},
	'& .FusePageSimple-content': {
		backgroundColor: '#FFF'
	},
	'& .FusePageSimple-sidebarHeader': {},
	'& .FusePageSimple-sidebarContent': {}
}));

function Vacations() {
	const [rightSideBarOpen, setRightSideBarOpen] = useState<boolean>(false);

	const handlerRightSideBar = () => {
		console.log(!rightSideBarOpen);
		setRightSideBarOpen(!rightSideBarOpen);
	};

	return (
		<Root
			header={
				<div className="p-24">
					<Button
						variant="contained"
						color="secondary"
						className="font-900 w-400"
						onClick={handlerRightSideBar}
					>
						休暇申請/本社出勤申請
					</Button>
				</div>
			}
			content={<VacationsTabs />}
			rightSidebarContent={<VacationSidebarContent />}
			rightSidebarOpen={rightSideBarOpen}
			rightSidebarOnClose={() => setRightSideBarOpen(false)}
			rightSidebarWidth={640} // 팀장님이 수정하기로 함
			rightSidebarVariant="temporary"
		/>
	);
}

export default memo(Vacations);
