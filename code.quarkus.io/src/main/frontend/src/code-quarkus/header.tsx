import React from 'react';
import './header.scss';
import { AngleLeftIcon } from '@patternfly/react-icons';
import { useAnalytics } from '../core/analytics';

export function Header() {
    const analytics = useAnalytics();
    const linkClick = (e: any) => {
        const link = e.target.getAttribute('href');
        analytics.event('UX', 'Click on header link', link);
    };
    return (
        <div className="header">
            <div className="header-content responsive-container">
                <div className="redhat-brand">
                    <a href="https://www.redhat.com" className="pf-c-nav__link" onClick={linkClick}>
                        <img className="logo" alt="Red Hat Logo"
                             src="https://developers.redhat.com/themes/custom/rhdp2/images/branding/RHLogo_white.svg"/>
                    </a>
                </div>
                <div className="nav-container">
                    <a href="https://code.quarkus.io" onClick={linkClick}><AngleLeftIcon/> Back to code.quarkus.io</a>
                </div>
                <div className="quarkus-brand">
                    <a href="https://quarkus.io" onClick={linkClick}>
                        <img src="/static/media/quarkus-logo.svg" className="logo" title="Quarkus" alt="Quarkus"/>
                    </a>
                </div>
            </div>
        </div>
    );
}