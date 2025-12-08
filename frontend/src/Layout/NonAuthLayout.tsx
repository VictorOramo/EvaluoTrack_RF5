import React, { useEffect } from 'react';
import withRouter from 'Common/withRouter';

//redux
import { useDispatch, useSelector } from "react-redux";

//import actions
import {
    changeLayout,
    changeLayoutTheme,
    changeLayoutMode,
} from "slices/thunk";
import { createSelector } from 'reselect';

const NonAuthLayout = ({ children }: any) => {
    const dispatch: any = useDispatch();
    const selectLayoutProperties = createSelector(
        (state: any) => state.Layout,
        (layout) => ({
          layoutType: layout.layoutType,
          layoutThemeType: layout.layoutThemeType,
          layoutModeType: layout.layoutModeType,
        })
      );
      
      const { layoutType, layoutThemeType, layoutModeType } = useSelector(selectLayoutProperties);

    /*
    layout settings
    */
    useEffect(() => {
        if (
            layoutType ||
            layoutThemeType ||
            layoutModeType 
        ) {
            window.dispatchEvent(new Event('resize'));
            dispatch(changeLayoutTheme(layoutThemeType));
            dispatch(changeLayoutMode(layoutModeType));
            dispatch(changeLayout(layoutType));
        }
    }, [layoutType,
        layoutThemeType,
        layoutModeType,
        dispatch]);

    useEffect(() => {
        if (layoutModeType === "dark") {
            document.body.setAttribute("data-layout-mode", "dark");
        } else {
            document.body.setAttribute("data-layout-mode", "light");
        }
        return () => {
            document.body.removeAttribute("data-layout-mode");
        };
    }, [layoutModeType]);
    return (
        <React.Fragment>
            <div>
                {children}
            </div>
        </React.Fragment>
    );
};

export default withRouter(NonAuthLayout);