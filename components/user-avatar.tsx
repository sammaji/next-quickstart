"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUser } from "@clerk/nextjs";

export default function UserAvatar() {
	const { isLoaded, isSignedIn, user } = useUser();
	const initials =
		isLoaded && isSignedIn && user
			? `${user?.firstName?.at(0)}${user?.lastName?.at(0)}`
			: "";

	return (
		<div>
			<Avatar>
				<AvatarFallback>{initials}</AvatarFallback>
				<AvatarImage src={user?.imageUrl}></AvatarImage>
			</Avatar>
		</div>
	);
}
