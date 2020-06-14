import React, {useState, useEffect} from 'react';
import { NavLink, withRouter } from "react-router-dom";

import listMenu from '../../../supports/listMenu';

//third party 
import 'antd/lib/menu/style/css';
import { Menu } from 'antd';

const { SubMenu } = Menu;

/* NOTE*
    sequence = list key yang sedang terbuka. sangat berguna untuk sub menu ketika aktif.
*/
const ViewMenu = props => {
    const [openKeys, setOpenKeys] = useState([]);

    useEffect(() => {
        // console.log('openKey = '+openKeys);
    }, [openKeys])

    const handleMenu = (e, setIndex) => {
        clickMenu(setIndex);
        handleOpenChange(e, setIndex);
    }

    const clickMenu = key => {
        let link = document.getElementById(key);
        link.click();
    }

    const handleOpenChange = (e, key) => {
        let sequence= e.item.props["data-sequence"];
        sequence    = sequence.toString().split(","); // dari string jadikan array yg di pisah dengan ,

        setOpenKeys(sequence);
        if(props.menuMobile) props.menuMobile();
    }

    const onOpenChange = e => {
        let selected = e.slice(-1)[0];

        let id = document.getElementById(selected);
        
        let sequence= [];

        if(id !== null){
            sequence = id.dataset.sequence;
            if(sequence !== undefined){
                sequence = sequence.toString().split(","); // dari string jadikan array yg di pisah dengan ,
            }
        }

        setOpenKeys(sequence);  
    }

    // default active menu
    useEffect(() => {
        let sequence = document.querySelector('.ant-menu-item-selected');

        if(sequence !== null){
            // console.log('tidak kosong');
            sequence = sequence.getAttribute('data-sequence');
            setOpenKeys([sequence]);
        }else{
            // console.log('kosong');
        }

    }, []);

    const getActiveClass = (path, sequence) => {
        const pathName  = props.location.pathname;

        if(pathName === path){
            // console.log('sama');
            return 'ant-menu-item-selected';
        }
    }

    const subMenu = (item, index, sequence) => {       

        return(
            <SubMenu
                id={index} 
                key={index}
                data-sequence={[...sequence]} // memasukkan dari sequence sebelumnya
                title={
                    <span>
                        {item.icon}
                        <span>{item.name}</span>
                    </span>
                }
            > 
                {item.subMenu.filter(item => item.showMenu).map((value, key) => {
                    let setKey = `${index}_${key}`;
                    let subSequence = [...sequence, setKey]; // menggabungkan sequence sebelumnya dengan setKey sekarang
                    return(
                        !value.isSubMenu 
                        ?  <Menu.Item 
                            // id={setKey} 
                            key={setKey}
                            data-sequence={subSequence}
                            onClick={e => handleOpenChange(e, setKey)}
                            className={getActiveClass(value.path, subSequence)}
                        >
                                <span htmlFor={setKey}>
                                    <NavLink id={setKey} to={value.path}>
                                        <p >{value.name}</p>
                                    </NavLink>
                                </span>
                            </Menu.Item> 
                        : subMenu(value, setKey, subSequence) 
                    )
                })}
            </SubMenu>
        )
    }

    return (
        <Menu 
            theme="dark" 
            mode="inline"
            openKeys={openKeys}
            // defaultSelectedKeys={[]}
            onOpenChange={(e) => onOpenChange(e)}
            // onClick={(e) => handleOpenChange(e)}
        >
            {
                listMenu.filter(item => item.showMenu).map((item, index) => {
                    let setIndex = `${index}`;
                    return(
                        !item.isSubMenu
                        ?   <Menu.Item 
                                key={setIndex} 
                                data-level="1"
                                data-sequence={[setIndex]} // membuat initial antrian
                                onClick={(e) => handleMenu(e, setIndex)}
                                className={getActiveClass(item.path, setIndex)}
                            > 
                                {item.icon}
                                <span key={setIndex}>
                                    <NavLink id={setIndex} to={item.path}>
                                        {item.name}
                                    </NavLink>
                                </span>
                            </Menu.Item>   
                        :   subMenu(item, setIndex, [setIndex])
                    )
                })
            }
        </Menu>
    );
        
}

export default withRouter(ViewMenu);
