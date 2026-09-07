import React from 'react';
import './Toast.css';

export default function ToastContainer({ toasts }) {
    if (!toasts || toasts.length === 0) return null;

    return (
        <div id="toast-container" className="toast-container" aria-live="polite" aria-atomic="true">
            {toasts.map((toast) => (
                <div className="toast" key={toast.id}>
                    <i className={`fa-solid ${toast.icon || 'fa-bolt'}`}></i>
                    <span>{toast.message}</span>
                </div>
            ))}
        </div>
    );
}
