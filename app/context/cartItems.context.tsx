"use client";
import React, { Dispatch, createContext, useEffect, useReducer } from "react";




const getCount = async ()=>{
 
    const response = await fetch('http://localhost:3000/api/getcountofelements')
 
    if(response.ok){
        var formattedresponse  = await response.json();
        console.log(formattedresponse)
        return(Number( formattedresponse.count))
    }else{
      return 0;
    }
    }
   

type StateType = {
    ItemCount: number;
  };

  type ActionType = {
    type: string;
    payload : number;
  };

  const initialState: StateType = {
    ItemCount:  0,
  };




  const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, ItemCount: action.payload};
      case "SetState":
        return { ...state, ItemCount: state.ItemCount - 1 };
      case "RESET":
        return { ...state, ItemCount: 0 };
      default:
        return state;
    }
  };

  export const CounterContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
  }>({ state: initialState, dispatch: () => null });

  export const CounterContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  

    useEffect(() => {
      getCount().then((count) => {
        console.log(count, "what is this")
        dispatch({ type:"INCREMENT", payload: count });
      });
    }, []);


    return (
      <CounterContext.Provider value={{ state, dispatch }}>
        {children}
      </CounterContext.Provider>
    );
  };