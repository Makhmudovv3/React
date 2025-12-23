import React, { useState } from 'react';
import './Shop.css';
import burger from '../assets/Burger.png';
import burger2 from '../assets/Burger2.png';
import burger3 from '../assets/Burger3.png';
import burger4 from '../assets/Burger4.png';
import burger5 from '../assets/Burger5.png';
import burger6 from '../assets/Burger6.png';

function Menu() {

    let [c1, setC1] = useState(0);
    let [c3, setC3] = useState(0);
    let [c2, setC2] = useState(0);
    let [c4, setC4] = useState(0);
    let [c5, setC5] = useState(0);
    let [c6, setC6] = useState(0);

    let p1 = 9.20, p2 = 10.00, p3 = 8.00, p4 = 9.99, p5 = 9.20, p6 = 8.00;

    function getGrandTotal() {
        return (c1 * p1 + c2 * p2 + c3 * p3 + c4 * p4 + c5 * p5 + c6 * p6).toFixed(2);
    };

    return (
        <div className="konteyner">
            <h1 className="sarlavha">Browse our menu</h1>
            <p className="sub-matn">
                Use our menu to place an order online, or phone our store to place a pickup order. Fast and fresh food.
            </p>

            <div className="kategoriya-blok">
                <button className="kat-btn active">Burgers</button>
                <button className="kat-btn">Sides</button>
                <button className="kat-btn">Drinks</button>
            </div>

            <div className="setka">
                <div className="karta">
                    <img src={burger} className="burger-rasm" alt="b1" />
                    <div className="info-qism">
                        <div className="header-qism"><strong>Burger Dreams</strong> <span className="narx">${p1} USD</span></div>
                        <p className="lorem-text">Lorem Ipsum is simply dummy text of the printing industry.</p>
                        <div className="pastki-qism">
                            <button onClick={() => c1 > 0 && setC1(c1 - 1)} className="btn-minus">-</button>
                            <div className="soni-box">{c1}</div>
                            <button onClick={() => setC1(c1 + 1)} className="btn-add">Add to cart</button>
                            <div className="total-yozuv">TOTAL: ${(c1 * p1)}</div>
                        </div>
                    </div>
                </div>

                <div className="karta">
                    <img src={burger4} className="burger-rasm" alt="b2" />
                    <div className="info-qism">
                        <div className="header-qism"><strong>Burger Waldo</strong> <span className="narx">${p2} USD</span></div>
                        <p className="lorem-text">Lorem Ipsum is simply dummy text of the printing industry.</p>
                        <div className="pastki-qism">
                            <button onClick={() => c2 > 0 && setC2(c2 - 1)} className="btn-minus">-</button>
                            <div className="soni-box">{c2}</div>
                            <button onClick={() => setC2(c2 + 1)} className="btn-add">Add to cart</button>
                            <div className="total-yozuv">TOTAL: ${(c2 * p2)}</div>
                        </div>
                    </div>
                </div>

                <div className="karta">
                    <img src={burger2} className="burger-rasm" alt="b3" />
                    <div className="info-qism">
                        <div className="header-qism"><strong>Burger Cali</strong> <span className="narx">${p3} USD</span></div>
                        <p className="lorem-text">Lorem Ipsum is simply dummy text of the printing industry.</p>
                        <div className="pastki-qism">
                            <button onClick={() => c3 > 0 && setC3(c3 - 1)} className="btn-minus">-</button>
                            <div className="soni-box">{c3}</div>
                            <button onClick={() => setC3(c3 + 1)} className="btn-add">Add to cart</button>
                            <div className="total-yozuv">TOTAL: ${(c3 * p3)}</div>
                        </div>
                    </div>
                </div>

                <div className="karta">
                    <img src={burger5} className="burger-rasm" alt="b4" />
                    <div className="info-qism">
                        <div className="header-qism"><strong>Burger Bacon Buddy</strong> <span className="narx">${p4} USD</span></div>
                        <p className="lorem-text">Lorem Ipsum is simply dummy text of the printing industry.</p>
                        <div className="pastki-qism">
                            <button onClick={() => c4 > 0 && setC4(c4 - 1)} className="btn-minus">-</button>
                            <div className="soni-box">{c4}</div>
                            <button onClick={() => setC4(c4 + 1)} className="btn-add">Add to cart</button>
                            <div className="total-yozuv">TOTAL: ${(c4 * p4)}</div>
                        </div>
                    </div>
                </div>

                <div className="karta">
                    <img src={burger3} className="burger-rasm" alt="b5" />
                    <div className="info-qism">
                        <div className="header-qism"><strong>Burger Spicy</strong> <span className="narx">${p5} USD</span></div>
                        <p className="lorem-text">Lorem Ipsum is simply dummy text of the printing industry.</p>
                        <div className="pastki-qism">
                            <button onClick={() => c5 > 0 && setC5(c5 - 1)} className="btn-minus">-</button>
                            <div className="soni-box">{c5}</div>
                            <button onClick={() => setC5(c5 + 1)} className="btn-add">Add to cart</button>
                            <div className="total-yozuv">TOTAL: ${(c5 * p5)}</div>
                        </div>
                    </div>
                </div>

                <div className="karta">
                    <img src={burger6} className="burger-rasm" alt="b6" />
                    <div className="info-qism">
                        <div className="header-qism"><strong>Burger Classic</strong> <span className="narx">${p6} USD</span></div>
                        <p className="lorem-text">Lorem Ipsum is simply dummy text of the printing industry.</p>
                        <div className="pastki-qism">
                            <button onClick={() => c6 > 0 && setC6(c6 - 1)} className="btn-minus">-</button>
                            <div className="soni-box">{c6}</div>
                            <button onClick={() => setC6(c6 + 1)} className="btn-add">Add to cart</button>
                            <div className="total-yozuv">TOTAL: ${(c6 * p6)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jami-summa-text">
                Total Price: ${getGrandTotal()} USD
            </div>

            <button className="see-all-btn">See Full Menu</button>
        </div>
    );
}

export default Menu;