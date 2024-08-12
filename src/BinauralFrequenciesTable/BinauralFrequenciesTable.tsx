import React from 'react';
import { frequencyData } from './data';
import "./BinauralFrequenciesTable.css"

const BinauralFrequenciesTable: React.FC = () => {
    return (
        <div className="table-container">
            <p>
                Binaural frequencies are used for various purposes such as meditation, relaxation, and mental healing. 
                These frequencies are believed to have specific effects on the mind and body based on research into sound 
                therapy and brainwave entrainment. Although scientific evidence varies, some studies suggest that listening 
                to binaural beats may influence brainwave activity, potentially affecting mental states, emotional well-being, 
                and cognitive performance.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Hz</th>
                        <th>Tuning</th>
                        <th>Effect</th>
                        <th>Best Time to Listen</th>
                    </tr>
                </thead>
                <tbody>
                    {frequencyData.map((freq, index) => (
                        <tr key={index}>
                            <td>{freq.hz}</td>
                            <td>{freq.tuning}</td>
                            <td>{freq.effect}</td>
                            <td>{freq.bestTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BinauralFrequenciesTable;
