import { BotLeft, BotRight, TopLeft, TopRight } from './Angles';
import './style.css'

export const Scope = ({className }) => {
    
    return (
        <div className={className}>
            <TopLeft />
            <TopRight />
            <BotLeft />
            <BotRight />
        </div>
    );
};