import useCreateJoke from "../hooks/useCreateJoke";
import { Button, Form, Input } from "antd";
import { useQueryClient } from "react-query";

const CreateJoke = () => {
  const createJoke = useCreateJoke();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const callData = {
      question: values?.question,
      answer: values?.answer,
    };
    createJoke.mutateAsync(callData)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      style={{
        maxWidth: 600,
        marginLeft: '200px',
        marginTop: '100px'
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Write joke's question"
        name="question"
        rules={[
          {
            required: true,
            message: "Please type the question!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Form.Item
          label="Write joke's answer"
          name="answer"
          rules={[
            {
              required: true,
              message: "Please type the answer!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item></Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateJoke;
