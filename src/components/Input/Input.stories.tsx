import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Input from "./Input";

const meta:Meta<typeof Input>={
    title:"Input",
    component:Input,
}

export default meta;
type Story =StoryObj<typeof Input>

export const Small:Story={
    args:{
        size:"small",
        placeholder:"Small Input"
    }
}

export const Medium:Story={
    args:{
        size:"medium", 
        placeholder:"Medium Input"
    }
}

export const Large:Story={
    args:{
        size:"large", 
        placeholder:"Large Input"
    }
}