import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

function TypeWriter({ text }) {
    const [displayText, setDisplayText] = useState("");
    const [currIndex, setCurrIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = 250; // Adjust typing speed in milliseconds
        const deleteSpeed = 100; // Adjust deleting speed in milliseconds
        let timeout;

        if (!isDeleting && currIndex < text.length) {
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[currIndex]);
                setCurrIndex((prev) => prev + 1);
            }, typeSpeed);
        } else if (isDeleting && currIndex >= 0) {
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev.slice(0, -1));
                setCurrIndex((prev) => prev - 1);
            }, deleteSpeed);
        }

        // Clear timeout on component unmount or when currIndex or isDeleting changes
        return () => clearTimeout(timeout);
    }, [currIndex, text, isDeleting]);

    // Start deleting text after typing completes
    useEffect(() => {
        if (currIndex === text.length) {
            setIsDeleting(true);
        } else if (isDeleting && currIndex === 0) {
            setIsDeleting(false);
        }
    }, [currIndex, text.length, isDeleting]);

    return (
        <Text 
            p={4} 
            fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }} 
            color="green" 
            fontFamily="'JetBrains Mono', monospace"
        >
            {displayText}|
        </Text>
    );
}

export default TypeWriter;
