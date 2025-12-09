import { recentOrders, stockReport, productDelivery, newcustomers } from "./dashboard";
import { productList, subCategoryListData, product } from "./products";

import { currencyRate, transaction } from "./localization";
import { couponsList } from "./coupons";
import { shipments } from "./shipping";
import { userList } from "./userlist";
import { profile, account, accountTransaction } from "./recentorders"

import { gridview, category, gridviewInstructor, listviewTable, subscriptionTable } from "./learning";
import { estateList } from "./Listing";
import { agentlistdata } from "./agent";
import { studentsinstructor, instructor } from "./instructor";
import { calenderDefaultCategories, events, defaultevent } from "./calendar"
import { messages, attachementsData, chatContactData, chatData, ChannelsData, callsData, bookmarkData, direactContact } from "./chat";
import { mailbox } from "./mailbox";
import { BrowserData, pageViewChartSeries, ClicksSeries, Conversationsseries, saleData, SalesReportSeries, analyticsData, widgetsSeries } from "./dashboardAnalytics"
import { BalanceChartsSeries, ContactData, EmailSendSeries, OpendealsData, radialSeries, SyncStatusBreakdownSeries, TaskslistData, UsersActivitySeries, WidgetsData } from "./dashboardCrm"
import { ordersData, PopularproductsData, RecentsalesData, Revenueseries, Budgetseries, PayoutsSeries, TrafficSourceSeries, latestOrder } from './dashboardEcommarce'
import { InstructorsData, LearningOverviewseries, StudentSeries, CourseSeries, ProgressSeries, coursesData } from './dashboardLearning'
import { AgentListData, saleProperty, rentProperty, PropertyData, RealEstateData } from "./dashboardRealestate";
import { rettingdetails } from "./details";
import { customerlist, coustomerdatailsdata } from "./customerList";
import { chooseShoppingAdd, shopingdata } from "./Shopingdata";
import { ordersList, order, ordertabledata } from "./orders";
import { sellerList, sellerGrid, sellingdata, portfoliodata } from "./sellers";

import {earningcard, earningdata} from "./earning";
import {agencies} from "./agencies";
import {ticketList} from "./supporttickets"
import {invoicesList} from "./invoiceListView"


export {
       profile, account, accountTransaction, recentOrders, stockReport, productDelivery,
        newcustomers, productList, subCategoryListData, ordersList, sellerList, sellerGrid, currencyRate, 
        transaction, couponsList, shipments, userList, calenderDefaultCategories, events, defaultevent, gridview, 
        category, gridviewInstructor,listviewTable,subscriptionTable,estateList, product, studentsinstructor, instructor,rettingdetails,agentlistdata,
        messages, attachementsData, chatContactData, chatData, ChannelsData, callsData, bookmarkData, direactContact, mailbox,     
        order,ordertabledata,customerlist,coustomerdatailsdata,chooseShoppingAdd,shopingdata,sellingdata,portfoliodata,
        BrowserData, pageViewChartSeries, ClicksSeries, Conversationsseries, saleData, SalesReportSeries, analyticsData, widgetsSeries,
        BalanceChartsSeries, ContactData, EmailSendSeries, OpendealsData, radialSeries, SyncStatusBreakdownSeries, TaskslistData, UsersActivitySeries, WidgetsData,
        ordersData, PopularproductsData, RecentsalesData, Revenueseries, Budgetseries, PayoutsSeries, TrafficSourceSeries, latestOrder,
        InstructorsData, LearningOverviewseries, StudentSeries, CourseSeries, ProgressSeries, coursesData, AgentListData,
        saleProperty, rentProperty, PropertyData, RealEstateData,earningcard, earningdata,agencies,ticketList,invoicesList,
 };


