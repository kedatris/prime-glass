import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, notification, Space, message } from 'antd';
import * as emailjs from 'emailjs-com'
import * as css from './styles';

const SUCCESS = 'success';
const FAIL = 'error';

const Contact = ({ mobile }) => {
  const [form] = Form.useForm();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const openNotification = type => {
    notification[type]({
      message: type === SUCCESS ? 'Berhasil' : 'Gagal',
      description: type === SUCCESS ? 'Email pengajuan berhasil dikirim, tim kami akan menghubungi Anda dalam 1x24 jam. Terima kasih.' : 'Maaf, email pengajuan gagal dikirim, coba lagi beberapa menit kemudian.',
    });
  };

  const clearData = () => {
    setName('');
    setEmail('');
    setProject('');
  }

  const validateData = () => {
    if (name.length && email.length && project.length) {
      return true;
    }
    message.warning('Mohon diisi semua data terlebih dahulu');
    return false;
  }

  const handleInputName = ({ target }) => {
    const { value } = target || {};
    setName(value);
  }

  const handleInputEmail = ({ target }) => {
    const { value } = target || {};
    setEmail(value);
  }

  const handleInputProject = ({ target }) => {
    const { value } = target || {};
    setProject(value);
  }

  const handleClickSend = () => {
    if (validateData()) {
      let templateParams = {
        from_name: name,
        to_name: 'threemajorsolution',
        from_email: email,
        subject: 'New Project from',
        message_html: project,
      }
  
      setIsLoading(true);
  
      emailjs.send(
        'service_5qb7fqs',
        'template_wvl5pio',
          templateParams,
        'user_doMtKcSDwenIEsOC6qHcL'
      ).then(response => {
        const status = response?.status;
  
        if (status === 200) {
          openNotification(SUCCESS);
          clearData();
        } else {
          openNotification(FAIL);
        }
        setIsLoading(false);
      }).catch(() => {
        openNotification(FAIL);
        setIsLoading(false);
      });
    }
  }

  return (
    <div id="contact" className={css.contentWrapper}>
      <div className={css.contentContact}>
        <div className={css.contentLeft}>
          <p className={css.contentTitle}>Mulai Projek Anda Bersama <strong>Prime Glass</strong></p>
        </div>
        <div className={css.contentRight}>
          <Form form={form}>
            <Row className={css.mb16} gutter={8}>
              <Col span={12}>
                <Form.Item>
                  <Input placeholder="Nama Lengkap*" value={name} onInput={handleInputName} required />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input type="email" placeholder="Alamat Email*" value={email} onInput={handleInputEmail} required />
                </Form.Item>
              </Col>
            </Row>
            <Row className={css.mb16}>
              <Col span={24}>
                <Form.Item>
                  <Input.TextArea placeholder="Jelaskan mengenai projek Anda disini*" rows={5} value={project} onInput={handleInputProject} required />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Space>
                <Button onClick={handleClickSend} loading={isLoading}>Kirim Email</Button>
                <span>{mobile ? 'Atau' : '/'}</span>
                <Button><a href="https://api.whatsapp.com/send?phone=+6287876638037" target="_blank" rel="noreferrer">Hubungi via Whatsapp</a></Button>                
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact;