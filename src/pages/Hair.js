import React, { Component } from 'react';
import './../css/App.css';
import './../css/Hair.css';
import HairImageContainer from '../components/HairImageContainer';

class Hair extends Component {

    imgIDArray = ['17Eji5FFJmiGfJGEtl8ASMOHpHbsNwLuy', '1qfIXvTTMdEVO-T6AisrQI9cwdDYc1My3', 
        '1gxP3-85OnZJvQzTdpp9Bpmy8V4l86RD0', '16195aLqT5yVDYN0DabvHvWH1RaSMNooU', '1LQAadipLUcYz3DoVeOn3o5bi3Cxq0MtM',
        '1xJ9WoHV_Fy8FsQ1rs6G2yNPzuPop4er7', '1Lt9aNp7VZe2pTsm1-i4Qhla6_suz-s87', '17N61vFfLoK9Emd7NDIIh-rNHFxoEDmLr',
        '1-dsol3-VPpnjXyKUwHX4Hv0GIqlKWMYN', '1ePiAFVwJ34vpQ9rKGXqmH88w0NSr-b_C', '1DdorUxMx6udhcb0ylny_V9JaQN_FPq0t',
        '1NLl7G0PiTygd0c7OaiQqm_r9ropsudzE', '1H6B8nhneMhj5XdXiWT9_oVXAgphZ-D9t', '1gj9b_Jm6ZeoWWmkO3RwA7P9hhDp27BUt',
        '11kT948JX6i_LYTWiQ_Hu17OaqfmvV42P', '1K_IvyFpgLv9QpFQFa7PN_tFDdr2ByGh9', '19dNDv8l-ESlTrCPkTiiQBCBBAMi3VI4p',
        '1xNCVeEp-v6b0DaleX3YfflPDWPOkx7zJ', '1CDq_CXLQfko8bNjiPXf5p2AjgCPuXTB3', '1xrGRY2O675vU37o96cqkFkEkaj2p0PUz',
        '1u_d0NtaahtjkwKuiBmRta62Djie8kshe'
    ]
    
    render() {
        return (
            <div>
                <div>
                    <div>
                        <HairImageContainer imgURL='https://drive.google.com/uc?id=1yugymc1NwZe1E4U6Xw-pLhKNkINAN4Ah' />
                    </div>
                    <div>
                        <p>I learned how to cut hair on Youtube. Since 2005, I've had the pleasure of transforming the image of many good friends.</p>
                    </div>

                </div>
                <div className="photoWrapper">
                    {this.imgIDArray.map((item, index) => 
                    <HairImageContainer key={index} imgURL={'https://drive.google.com/uc?id='+item}/>)}
                </div>
                <footer>
                    <p>see more <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/brianlamhair/"> here</a></p>
                </footer>
            </div>
        )
    }

    
}


export default Hair;