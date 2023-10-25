import { Button, Form, Input } from 'antd';
import classes from './contact.module.scss';
import SmallSwiper from '~/components/swiper/smallSwiper';
const { TextArea } = Input;
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes['contact-form']}>
        <h2 className={classes['contact-form__title']}>聯絡我們</h2>
        <Form
          name='basic'
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          className={classes['contact-form__wrap']}
        >
          <Form.Item<FieldType>
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Title'
            name='username'
            rules={[{ required: true, message: 'Please input your Title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='TextArea'
            name='username'
            rules={[{ required: true, message: 'Please input your Content!' }]}
          >
            <TextArea style={{ resize: 'none' }} />
          </Form.Item>

          <Form.Item style={{ textAlign: 'right' }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <SmallSwiper text='熱門文章' />
    </div>
  );
};

export default Contact;
