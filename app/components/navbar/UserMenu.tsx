'use client';
import { AiOutlineMenu } from 'react-icons/ai'
import React,{ useCallback,useState } from 'react';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRentModal from '@/app/hooks/useRentModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';


const UserMenu = () => {
	const rentModal = useRentModal();
	const onRent = useCallback(() => {
		rentModal.onOpen();
	},[rentModal]);
	// const onRent = useCallback(() => {
	// 	if (!currentUser) {
	// 		return loginModal.onOpen();
	// 	}

	// 	rentModal.onOpen();
	// },[loginModal,rentModal,currentUser]);
	const [isOpen,setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	},[])

	return (
		<div className=" relative">
			<div className=" flex flex-row items-center gap-3 ">
				<div
					onClick={(onRent)}
					className=" 
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
         ">
					Airbnb your House

				</div>

				<div
					onClick={toggleOpen}

					className=" 
           p-4
           md:py-1
           md:px-2
           border-[1px]
           border-neutral-200
           flex
           flex-row
           items-center
           rounded-full
            hover:shadow-md
            transition
          
           "
				>

					<AiOutlineMenu />
					<div className="hidden md:block px-2">

						<Avatar />
					</div>
				</div>
			</div>

			{isOpen && (
				<div className=" 
             absolute
             rounded-xl
             shadow-md
             bg-white
             w-[40vw]
             md:w-3/4
             overflow-hidden
             right-0
             top-12
             text-sm
            ">
					<div className=" flex flex-col cursor-pointer">
						<>
							<MenuItem
								onClick={() => { }}
								label="Login"
							/>

							<MenuItem
								onClick={() => { }}
								label="Sign up"
							/>
						</>

					</div>
				</div>
			)}

		</div>
	);
};

export default UserMenu;