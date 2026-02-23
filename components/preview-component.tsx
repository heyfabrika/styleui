"use client"

import React from "react"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import reactElementToJSXString from "react-element-to-jsx-string"
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

// This is important to identify the component name and props.
const componentPropSignatures: Array<{
    name: string
    requiredProps?: string[]
    optionalProps?: string[]
}> = [
    { 
        name: 'AnimatedList', 
        optionalProps: ['delay', 'reverse', 'loop'] 
    },
    { 
        name: 'Counter', 
        requiredProps: ['value'],
        optionalProps: ['suffix'] 
    },
]

function identifyComponentByProps(props: Record<string, unknown>): string | null {
    const propKeys = Object.keys(props).filter(k => k !== 'children')
    
    for (const sig of componentPropSignatures) {
        if (sig.requiredProps) {
            const hasAllRequired = sig.requiredProps.every(p => p in props)
            if (!hasAllRequired) continue
        }
        
        const allKnownProps = [...(sig.requiredProps || []), ...(sig.optionalProps || [])]
        const matchingProps = propKeys.filter(p => allKnownProps.includes(p))
        
        if (matchingProps.length > 0 || (sig.requiredProps && sig.requiredProps.every(p => p in props))) {
            return sig.name
        }
    }
    
    return null
}

function getDisplayName(element: React.ReactNode): string {
    if (!React.isValidElement(element)) return 'div'
    const type = element.type as any
    const props = element.props as Record<string, unknown>

    switch (true) {
        case typeof type === 'string':
            return type;
        case !!type.displayName:
            return type.displayName;
        case !!type.type?.displayName:
            return type.type.displayName;
        case !!type.name && type.name !== '':
            return type.name;
        default: {
            const identifiedName = identifyComponentByProps(props);
            if (identifiedName) return identifiedName;
            return 'UnknownComponent';
        }
    }
}

const PreviewComponent = ({
    children,
    language = "tsx"
}: {
    children: React.ReactNode
    language?: string
}) => {
    const childArray = React.Children.toArray(children)
    
    const code = childArray
        .filter(React.isValidElement)
        .map((child) => 
            reactElementToJSXString(child, {
                showFunctions: true,
                showDefaultProps: false,
                filterProps: ["key"],
                displayName: getDisplayName,
            })
        )
        .join("\n")

    return (
        <Tabs items={['Preview', 'Code']}>
            <Tab value="Preview" className="flex items-center justify-center dark:bg-black/30">
                {children}
            </Tab>
            <Tab value="Code">
                <DynamicCodeBlock
                    lang={language}
                    code={code}
                />
            </Tab>
        </Tabs>
    )
}

PreviewComponent.displayName = "PreviewComponent"

export default PreviewComponent