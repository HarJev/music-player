import React, { Component } from 'react'
import { LandingPageView } from './View';

export class Container extends Component {
    render() {
        return (
            <div>
                <LandingPageView />
            </div>
        )
    }
}

export const LandingPage = (Container);

export default LandingPage;
