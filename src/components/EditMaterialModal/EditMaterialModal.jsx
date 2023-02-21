

export const EditMaterialModal = ({ onClose, onEdit }) => {
    return (
        <div>
            <h2>Вікно редагування матеріала</h2>
            <button 
                type="button" 
                onClick={() => {onEdit(); onClose();}}
            >
                Ось тепер точно редагувати
            </button>
            <button type="button" onClick={onClose}>Закрити</button>
        </div>
    );
};