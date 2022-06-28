import './App.css'
import 'antd/dist/antd.css'
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd'
import { useState } from 'react'
const { RangePicker } = DatePicker
const { TextArea } = Input

function App() {
  const [componentDisabled, setComponentDisabled] = useState(true)

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled)
  }

  return (
    <div className='App'>
      <h1 id='title'>Survey Form</h1>
      <p id='description'>Short explanation</p>
      <Form
        id='survey-form'
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout='horizontal'
        initialValues={{
          disabled: componentDisabled,
        }}
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Form.Item
          label='Form disabled'
          name='disabled'
          valuePropName='checked'
        >
          <Checkbox>disabled</Checkbox>
        </Form.Item>
        <Form.Item label='Radio'>
          <Radio.Group>
            <Radio value='apple'> Apple </Radio>
            <Radio value='pear'> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Input'>
          <Input />
        </Form.Item>
        <Form.Item label='Select'>
          <Select>
            <Select.Option value='demo'>Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='TreeSelect'>
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label='Cascader'>
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label='DatePicker'>
          <DatePicker />
        </Form.Item>
        <Form.Item label='RangePicker'>
          <RangePicker />
        </Form.Item>
        <Form.Item label='InputNumber'>
          <InputNumber />
        </Form.Item>
        <Form.Item label='TextArea'>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label='Switch' valuePropName='checked'>
          <Switch />
        </Form.Item>
        <Form.Item label='Button'>
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
