import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button, PaginationProps } from 'antd'
import { getTableData, TableResponseData } from './slices'
import { RootState } from '../../redux/store'
import columns from './columns'

const AntdTable: React.FC = () => {
  const dispatch = useDispatch()

  const { data, loading } = useSelector((state: RootState) => state.table.getTableData || {})

  const [dataSource, setDataSource] = useState<TableResponseData[]>([])
  const [pageSize, setPageSize] = useState<number>(5)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    dispatch(getTableData())
  }, [])

  useEffect(() => setDataSource(data), [data])

  const tableChangeHandler = (pagination: PaginationProps) => {
    setPage(pagination.current ?? 1)
    setPageSize(pagination.pageSize ?? 5)
  }

  const onTableValueChange = (field: string, value: string, id: string) => {
    const newData = dataSource.map((data) => {
      if (data.id === id) {
        if (Object.keys(data).includes(field)) {
          const d = { ...data }
          d[field] = value
          return d
        } else return data
      } else return data
    })
    console.log(newData)
  }

  const addNewHandler = () => {
    const newData = [...dataSource, { name: '', email: '', position: '', id: `${dataSource.length}` }]
    setPage(Math.ceil(newData.length / pageSize))
    setDataSource(newData)
  }

  return (
    <>
      <Button type="primary" onClick={addNewHandler}>
        Add New Record To Bottom Of Database
      </Button>
      <Table
        rowKey="id"
        size="middle"
        columns={columns(onTableValueChange)}
        loading={loading}
        dataSource={dataSource}
        onChange={tableChangeHandler}
        pagination={{
          pageSize: pageSize,
          pageSizeOptions: ['5', '10', '20'],
          current: page,
          total: dataSource.length,
          showSizeChanger: true,
          hideOnSinglePage: false,
          showTotal: (total) => `Total item: ${total}`,
        }}
      />
    </>
  )
}

export default AntdTable
