"use client"
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter
} from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { HeartIcon } from "../../components/HeartIcon";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GitHubIcon, DiscordIcon } from "@/components/icons";
import Proyectos from "@/components/Proyectos";


export default function App() {
	
  return (
	
	<Proyectos/>
  );
}
