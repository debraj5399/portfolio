/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Text } from '@nextui-org/react';

export default function Home() {
    const [textLines, setTextLines] = useState(['', '', '']);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const textContent = [
        'Hi',
        'I am Debraj Banik',
        'Software Engineer'
    ];

    useEffect(() => {

        const timer = setTimeout(() => {
            try {
                if (currentCharIndex < textContent[currentLineIndex].length) {
                    setCurrentCharIndex(currentCharIndex + 1);
                } else {
                    setCurrentLineIndex(currentLineIndex + 1);
                    setCurrentCharIndex(0);
                }
            } catch (e) {

            }

        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [currentCharIndex, currentLineIndex]);

    useEffect(() => {
        try {
            if (currentLineIndex < textContent.length) {
                const newTextLines = [...textLines];
                newTextLines[currentLineIndex] = textContent[currentLineIndex].substring(0, currentCharIndex);
                setTextLines(newTextLines);
            }
        } catch (e) {

        }

    }, [currentCharIndex, currentLineIndex, textLines]);

    return (
        <>
            {textLines.map((line, index) => (
                <Text
                    key={index}
                    h1
                    size={60}
                    css={{
                        textGradient: index === 0 ?
                            '45deg, $blue600 -20%, $pink600 50%'
                            : index === 1 ?
                                "45deg, $purple600 -20%, $pink600 100%"
                                : "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                >
                    {line}
                </Text>
            ))}
        </>
    );
}
