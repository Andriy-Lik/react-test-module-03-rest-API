import { Material } from '../Material/Material';

export const Materials = ({ items, onDelete, onUpdate }) => {
    return (
        <ul>
            {items.map(item => 
            <li key={item.id}>
                <Material item={item} onDelete={onDelete} onUpdate={onUpdate} />
                <hr />
            </li>)}
        </ul>
    );
}