import React, { ReactNode, useEffect } from 'react';

//import actions
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType,
    changeSidebarImageType,
    changeBodyImageType
} from "slices/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
// import TopBar from './TopBar';

import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';
import { changeLayoutTheme } from 'slices/layouts/thunk';
import withRouter from 'Common/withRouter';
import { createSelector } from 'reselect';

interface LayoutProps {
    children: ReactNode;
}
const Layout = (props: LayoutProps) => {

    const dispatch: any = useDispatch();
    const selectLayoutProperties = createSelector(
        (state: any) => state.Layout,
        (layout) => ({
          layoutType: layout.layoutType,
          layoutThemeType: layout.layoutThemeType,
          leftSidebarType: layout.leftSidebarType,
          layoutModeType: layout.layoutModeType,
          layoutWidthType: layout.layoutWidthType,
          layoutPositionType: layout.layoutPositionType,
          topbarThemeType: layout.topbarThemeType,
          leftsidbarSizeType: layout.leftsidbarSizeType,
          leftSidebarViewType: layout.leftSidebarViewType,
          leftSidebarImageType: layout.leftSidebarImageType,
          bodyImageType: layout.bodyImageType
        })
      );
      
      const {
        layoutType,
        layoutThemeType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        bodyImageType
      } = useSelector(selectLayoutProperties);

    /*
    layout settings
    */
    useEffect(() => {
        if (
            layoutType ||
            layoutThemeType ||
            leftSidebarType ||
            layoutModeType ||
            layoutWidthType ||
            layoutPositionType ||
            topbarThemeType ||
            leftsidbarSizeType ||
            leftSidebarViewType ||
            leftSidebarImageType ||
            bodyImageType
        ) {
            window.dispatchEvent(new Event('resize'));
            dispatch(changeLeftsidebarViewType(leftSidebarViewType));
            dispatch(changeLayoutTheme(layoutThemeType));
            dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
            dispatch(changeSidebarTheme(leftSidebarType));
            dispatch(changeLayoutMode(layoutModeType));
            dispatch(changeLayoutWidth(layoutWidthType));
            dispatch(changeLayoutPosition(layoutPositionType));
            dispatch(changeTopbarTheme(topbarThemeType));
            dispatch(changeLayout(layoutType));
            dispatch(changeSidebarImageType(leftSidebarImageType));
            dispatch(changeBodyImageType(bodyImageType));
        }
    }, [layoutType,
        layoutThemeType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        bodyImageType,
        dispatch]);

    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <Sidebar layoutType={layoutType} />
                <Header />
                <div className="main-content">
                    {props.children}
                    <Footer />
                </div>
            </div>
            <RightSidebar />
        </React.Fragment>
    );
}

export default withRouter(Layout);