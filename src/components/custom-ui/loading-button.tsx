import React from 'react'
import { Button } from '../ui/button';
import { LoaderCircle } from 'lucide-react';

interface LoadingButtonProps {
    isLoading: boolean;
}

export default function LoadingButton({ isLoading }: LoadingButtonProps) {
    return (
        <div>{isLoading ? (
            
            <Button type="button" disabled className='w-full'> <span><LoaderCircle className='animate-spin mr-2'/></span>Loading...</Button>
        ) : (
            <Button type="submit" className='w-full'>Submit</Button>
        )}</div>
    )
}