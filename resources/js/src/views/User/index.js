import React, {useEffect, useState} from 'react';
import Datatable from '../_components/Datatable';

import './styles.scss';

// partials
import FilterUser from './partials/FilterUser';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/breadcrumb/style/css';
import { 
    Row, Col, Layout, Breadcrumb,
} from 'antd';
import {
    BarsOutlined
} from '@ant-design/icons';

const { Content }   = Layout;

const user = props => {
    const nameRoute = '/user';
    const [addFilter, setAddFilter] = useState({
        name: null,
        address: null,
    });
    const data = [
        {label: 'Nata', value: 0},
        {label: 'Risky', value: 1},
        {label: 'Andi', value: 2},
    ];
    const columns = [
        {title: 'Name', dataIndex: 'name', key: 'name'},
    ];
    const addActions = [
        {title: <BarsOutlined />, color: 'info', handle:e => handleDetail(e)},
    ];

    const handleDetail = e => {
        console.log(e);
    }

    const filterName = e => {
        // console.log(e);
        setAddFilter({...addFilter, name: e.label});
    }

    const filterAddress = e => {
        setAddFilter({...addFilter, address: e.label});
    }

    return(
        <div>
            <Row className="header-content">
                <Col span="20">
                    <h1 className="title-content">User</h1>
                </Col>
                <Col span="4">
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Table</Breadcrumb.Item>
                    </Breadcrumb> */}
                </Col>
            </Row>
            <FilterUser 
                data={data}
                filterName={filterName}
                filterAddress={filterAddress}
            />
            <Content>
                <div className="site-layout-background" >
                    <Datatable
                        title="User"

                        // usePopup
                        columns={columns} 
                        nameRoute={nameRoute}
                        addFilter={addFilter}
                        addActions={addActions}
                    />
                </div>
            </Content>
        </div>
    )
}

export default user;