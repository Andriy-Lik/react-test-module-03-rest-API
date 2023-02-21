import { Component } from 'react';
import { EditMaterialModal } from '../EditMaterialModal/EditMaterialModal';

export class Material extends Component {
    state = {
        isModalOpen: false,
    };

    openModal = () => this.setState({ isModalOpen: true });
    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        const { item, onUpdate, onDelete } = this.props;
        const { isModalOpen } = this.state;
        return (
            <div>
                <p>
                    <b>Назва:</b> {item.title}
                </p>
                <p>
                    <b>Посилання:</b> {item.link}
                </p>
                <button type="button" onClick={() => onDelete(item.id)}>
                    Видалити
                </button>
                <button type="button" onClick={this.openModal}>
                    Редагувати
                </button>
                {isModalOpen && (
                    <EditMaterialModal 
                        onClose={this.closeModal} 
                        onEdit={() => onUpdate({ id: item.id, title: Date.now() })} 
                    />
                )}
            </div>
        );
    };

    
    
}