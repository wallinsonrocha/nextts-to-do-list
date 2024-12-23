interface PriorityIconProps {
    propColor?: string;
}

export default function PriorityIcon({propColor = "#D9D9D9"}: PriorityIconProps) {
    const color: string = propColor;

    return (
        <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.5H20C22.2091 0.5 24 2.29086 24 4.5V9.07143C24 10.965 22.465 12.5 20.5714 12.5H12C5.37258 12.5 0 7.12742 0 0.5Z" fill={color} />
        </svg>
    );
}
