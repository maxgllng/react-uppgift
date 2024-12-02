import React, { useState, useEffect } from 'react';
import '../styles/footer.css';
import { X, Facebook, Instagram } from 'grommet-icons';

export default function Footer() {
    return (
        <div className="footer">
            <p>© PureThoughts. 2024</p>
            <div className="socials--wrapper">
                <X />
                <Facebook />
                <Instagram />
            </div>
        </div>
    )

}