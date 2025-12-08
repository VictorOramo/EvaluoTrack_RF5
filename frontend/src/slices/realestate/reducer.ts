import { createSlice } from "@reduxjs/toolkit";
import {
    getRealEstateGridList, addRealEstateGridList, updateRealEstateGridList, deleteRealEstateGridList, getAgentGridList, addAgentGridList, updateAgentGridList, deleteAgentGridList, getEarningList, getAgenciesList, addAgenciesList, updateAgenciesList,
    deleteAgenciesList, getAgentList, addAgentList, updateAgentList, deleteAgentList, getRealEstateListingList, addRealEstateListingList, updateRealEstateListingList, deleteRealEstateListingList,
    getRealestateAgencyOverview, updateRealEstateAgencyOverview, deleteRealestateAgencyOverview, getRealestateListMap, addRealEstateListMap, updateRealEstateListMap, deleteRealestateListMap
} from "./thunk";

export const initialState = {
    realEstateGridList: [],
    agentGridList: [],
    earninglist: [],
    agencieslist: [],
    agentlist: [],
    listmap: [],
    realEstateListingList: [],
    realEstateAgencyOverview: [],
    errors: {}
};

const RealEstateslice = createSlice({
    name: 'RealEstate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRealEstateGridList.fulfilled, (state: any, action: any) => {
            state.realEstateGridList = action.payload;
        });
        builder.addCase(getRealEstateGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addRealEstateGridList.fulfilled, (state: any, action: any) => {
            state.realEstateGridList.unshift(action.payload);
        });
        builder.addCase(addRealEstateGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateRealEstateGridList.fulfilled, (state: any, action: any) => {
            state.realEstateGridList = state.realEstateGridList.map((grid: any) =>
                grid.id === action.payload.id
                    ? { ...grid, ...action.payload }
                    : grid
            )
        });
        builder.addCase(updateRealEstateGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteRealEstateGridList.fulfilled, (state: any, action: any) => {
            state.realEstateGridList = state.realEstateGridList.filter(
                (realestategrid: any) => realestategrid.id !== action.payload
            );
        });
        builder.addCase(deleteRealEstateGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getAgentGridList.fulfilled, (state: any, action: any) => {
            state.agentGridList = action.payload;
        });
        builder.addCase(getAgentGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(addAgentGridList.fulfilled, (state: any, action: any) => {
            state.agentGridList.unshift(action.payload);
        });
        builder.addCase(addAgentGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateAgentGridList.fulfilled, (state: any, action: any) => {
            state.agentGridList = state.agentGridList.map((grid: any) =>
                grid.id === action.payload.id
                    ? { ...grid, ...action.payload }
                    : grid
            )
        });
        builder.addCase(updateAgentGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteAgentGridList.fulfilled, (state: any, action: any) => {
            state.agentGridList = state.agentGridList.filter(
                (agentgrid: any) => agentgrid.id !== action.payload
            );
        });
        builder.addCase(deleteAgentGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(getEarningList.fulfilled, (state: any, action: any) => {
            state.earninglist = action.payload;
        });
        builder.addCase(getEarningList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getAgenciesList.fulfilled, (state: any, action: any) => {
            state.agencieslist = action.payload;
        });
        builder.addCase(getAgenciesList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addAgenciesList.fulfilled, (state: any, action: any) => {
            state.agencieslist.push(action.payload);
        });
        builder.addCase(addAgenciesList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateAgenciesList.fulfilled, (state: any, action: any) => {
            state.agencieslist = state.agencieslist.map((grid: any) =>
                grid.id === action.payload.id
                    ? { ...grid, ...action.payload }
                    : grid
            )
        });
        builder.addCase(updateAgenciesList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteAgenciesList.fulfilled, (state: any, action: any) => {
            state.agencieslist = state.agencieslist.filter(
                (agencieslist: any) => agencieslist.id !== action.payload
            );
        });
        builder.addCase(deleteAgenciesList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getAgentList.fulfilled, (state: any, action: any) => {
            state.agentlist = action.payload;
        });
        builder.addCase(getAgentList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addAgentList.fulfilled, (state: any, action: any) => {
            state.agentlist.push(action.payload);
        });
        builder.addCase(addAgentList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateAgentList.fulfilled, (state: any, action: any) => {
            state.agentlist = state.agentlist.map((agent: any) =>
                agent.id === action.payload.id
                    ? { ...agent, ...action.payload }
                    : agent
            )
        });
        builder.addCase(updateAgentList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteAgentList.fulfilled, (state: any, action: any) => {
            state.agentlist = state.agentlist.filter(
                (agentlist: any) => agentlist.id !== action.payload
            );
        });
        builder.addCase(deleteAgentList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(getRealEstateListingList.fulfilled, (state: any, action: any) => {
            state.realEstateListingList = action.payload;
        });
        builder.addCase(getRealEstateListingList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addRealEstateListingList.fulfilled, (state: any, action: any) => {
            state.realEstateListingList.push(action.payload);
        });
        builder.addCase(addRealEstateListingList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(updateRealEstateListingList.fulfilled, (state: any, action: any) => {
            state.realEstateListingList = state.realEstateListingList.map((grid: any) =>
                grid.id === action.payload.id
                    ? { ...grid, ...action.payload }
                    : grid
            )
        });
        builder.addCase(updateRealEstateListingList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteRealEstateListingList.fulfilled, (state: any, action: any) => {
            state.realEstateListingList = state.realEstateListingList.filter(
                (list: any) => list.id !== action.payload
            );
        });
        builder.addCase(deleteRealEstateListingList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getRealestateAgencyOverview.fulfilled, (state: any, action: any) => {
            state.realEstateAgencyOverview = action.payload;
        });
        builder.addCase(getRealestateAgencyOverview.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateRealEstateAgencyOverview.fulfilled, (state: any, action: any) => {
            state.realEstateAgencyOverview = state.realEstateAgencyOverview.map((grid: any) =>
                grid.id === action.payload.id
                    ? { ...grid, ...action.payload }
                    : grid
            )
        });
        builder.addCase(updateRealEstateAgencyOverview.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteRealestateAgencyOverview.fulfilled, (state: any, action: any) => {
            state.realEstateAgencyOverview = state.realEstateAgencyOverview.filter(
                (grid: any) => grid.id !== action.payload
            );
        });
        builder.addCase(deleteRealestateAgencyOverview.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });


        builder.addCase(getRealestateListMap.fulfilled, (state: any, action: any) => {
            state.listmap = action.payload;
        });
        builder.addCase(getRealestateListMap.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(addRealEstateListMap.fulfilled, (state: any, action: any) => {
            state.listmap.unshift(action.payload);
        });
        builder.addCase(addRealEstateListMap.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(updateRealEstateListMap.fulfilled, (state: any, action: any) => {
            state.listmap = state.listmap.map((list: any) =>
                list.id === action.payload.id
                    ? { ...list, ...action.payload }
                    : list
            )
        });
        builder.addCase(updateRealEstateListMap.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });


        builder.addCase(deleteRealestateListMap.fulfilled, (state: any, action: any) => {
            state.listmap = state.listmap.filter(
                (list: any) => list.id !== action.payload
            );
        });
        builder.addCase(deleteRealestateListMap.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default RealEstateslice.reducer;