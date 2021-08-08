import InputField from '../../components/InputField'

const columns = (onChange: (field: string, value: string, id: string) => void) => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value: string, record: any) => (
        <InputField fieldName="name" value={value} recordId={record!.id} onChange={onChange} />
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (value: string, record: any) => (
        <InputField fieldName="email" value={value} recordId={record!.id} onChange={onChange} />
      ),
    },
    {
      title: 'Position',
      dataIndex: 'position',
      render: (value: string, record: any) => (
        <InputField fieldName="position" value={value} recordId={record!.id} onChange={onChange} />
      ),
    },
  ]
}

export default columns