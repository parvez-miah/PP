import React from 'react';
import { Container } from 'react-bootstrap';
import './WorkTogether.css'

const WorkTogether = () => {
    return (
        <div className="font">
            <h2 style={{ textAlign: "center", fontWeight: '700', color: 'blue' }} >My Mission</h2>
            <div className="font work">
                <Container>
                    <div className="work-together">
                        <div style={{ marginLeft: '20px' }}>
                            <h2 className=" section-this text-primary">Work Together For Success</h2>
                            <p ata-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className="work-image">
                            <img src="https://i.ibb.co/TgsbrvG/finance-cuate.png" alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default WorkTogether;