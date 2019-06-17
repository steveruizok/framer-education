import * as React from "react"
import { Frame, ScrollProps, Stack, Scroll } from "framer"
import { Card } from "./Card"
import { Text } from "./Text"

type Item = {
    text: string
    height: number
    onTap: (item) => void
    component: string
    icon: string
    value: string
    emptyText: string
    onValueChange: (value) => void
}

type Props = Partial<ScrollProps> & {
    items: Item[]
}

export function CardList(props) {
    const { items, emptyText, ...rest } = props

    const contentHeight = props.items.reduce(
        (acc, cur) => acc + (cur.height || 320) + 16,
        16 + 16 + 8
    )

    return (
        <Scroll {...props} contentHeight={contentHeight}>
            <Stack
                width="100%"
                height={contentHeight}
                direction="vertical"
                gap={16}
                padding={16}
                background="none"
            >
                {props.items.length > 0 ? (
                    props.items.map((item, index) => {
                        return (
                            <Card key={`item_${index}`} width="1fr" {...item} />
                        )
                    })
                ) : (
                    <Text
                        height={128}
                        width="1fr"
                        type="body"
                        text={emptyText}
                    />
                )}
            </Stack>
        </Scroll>
    )
}

CardList.defaultProps = {
    width: 320,
    height: 520,
    items: [],
    emptyText: "Nothing to see here.",
}