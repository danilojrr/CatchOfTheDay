import * as React from 'react';

export class OrderList extends React.Component<any, any> {
    render() {
        return (
            <ul className="order-list">
                <li className="order-item">
                    <span>2</span>
                    <span>lbs</span>
                    <span className="fish-name">Fish name</span>
                    <span>$32.00</span>
                </li>
            </ul>
        );
    }
}