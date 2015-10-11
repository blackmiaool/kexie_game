
jjj=js.global;
p={};
pp=jjj.pp;
v=jjj.v;
res=jjj.res;
sys=jjj.sys;
gap=jjj.gap;
imdeveloper=jjj.imdeveloper;
prop=v.prop;
--spots=jjj.spots;
function exit(v)
    --    coroutine.
    ts(res.black,500)
    sys:to_scene("home",v);
    return true;
end
function rand(a,b)
    return jjj:rand(a,b)
end
function put(...)
    local outs={};
    local args={...}
    for i,j in ipairs(args) do
        local output="";
        function append(text)
            output=output..text;
        end
        PrintTable(j,append,false);
        table.insert(outs,output);
    end

    --    print(output)
    jjj:print_from_lua(table.unpack(outs));
end
function start(scene,...)   
    current_scene=scene();
    resume(...);
end

function resume(...)
    return coroutine.resume(current_scene,...);
end
function delay(...)
    jjj:delay(...)
    return coroutine.yield()
end
function ts(...)

    jjj:ts(...)
    return coroutine.yield()
end
tc_current_npc={};
function set_current_npc(arg)
    tc_current_npc=arg;
end

function tcy(...)
    args={...}
    jjj:tc(args[1],pp.you,args[3])
    return coroutine.yield()
end
function tcn(...)
    args={...}
    jjj:tc(args[1],tc_current_npc,args[2],args[3])
    return coroutine.yield()
end
function tcc( ... )
    jjj:tcc(...)
    return coroutine.yield()
end
function tc(...)
    jjj:tc(...)
    return coroutine.yield()
end
function th(...)
    jjj:th(...)
    return coroutine.yield()
end
function tm(...)
    jjj:lua_arg_init();

    for i,j in ipairs({...}) do
        --        print(i,j,"a")
        function handle(jv,lv)

            --            print(jv,lv,"b")
            for c,b in pairs(lv) do
                if type(c)=="number" then
                    c=c-1;
                end
                --                print(c,b,"c")
                if type(b)=="table" then
                    jjj:lua_arg_init_one(jv,c);
                    handle(jv[c],b);
                else
                    jv[c]=b;
                end

            end
        end
        if type(j)=="table" then
            handle(jjj.lua_arg[i-1],j);
        else 
            jjj.lua_arg[i-1]=j;
        end
    end
    jjj:tm()
    coroutine.yield()
    return jjj.js_arg.index,jjj.js_arg.value;
end












table.find=function(t,value)
    for i,j in ipairs(t) do
        if j==value then
            return i
        end
    end
    return false
end

function PrintTable(o, f, show_square_brackets,is_key)
    if type(f) ~= "function" and f ~= nil then
        error("expected second argument %s is a function", tostring(f))
    end
    if type(show_square_brackets) ~= "boolean" and show_square_brackets ~= nil then
        error("expected third argument %s is a boolean", tostring(show_square_brackets))
    end
    local p = f or io.write

    show_square_brackets = show_square_brackets or false
    --    if type(o) == "number" or 
    --        type(o) == "function" or
    --        type(o) == "boolean" or
    --        type(o) == "nil" then
    --        if type(o) == "function" or type(o) == "function" then

    --        else
    --          p(tostring(o))
    --        end
    if table.find({"function","nil","number"},type(o)) then

        if (not is_key) and type(o)=="number" then
            p(tostring(o))           
        else
            p("\"")
            p(tostring(o))
            p("\"")
        end

    elseif table.find({"boolean"},type(o)) then
        p(tostring(o))
    elseif type(o) == "string" then
        p(string.format("%q",o))
    elseif type(o) == "table" then
        p("{")
        for k,v in pairs(o) do
            if show_square_brackets then
                p("[")
            end

            PrintTable(k, p, show_square_brackets,true)

            if show_square_brackets then
                p("]")
            end

            p(":")

            PrintTable(v, p, show_square_brackets)
            p(",")
        end
        p("}")

    end
end

function table.link(t1,t2)
    local ret={}
    for i=1,#t1 do
        ret[#ret+1] = t1[i]
    end
    for i=1,#t2 do
        ret[#ret+1] = t2[i]
    end
    return ret
end








local spot_type_default_menu={kexie={"探索","闲逛"},activity={"闲逛"},work={"自习"},library={"读书","自习"},home={"LOL","DOTA2","WOW","StarCraftⅡ"}};
local spot_behavior={};
spot_behavior["探索"]=function()end;
function enter_spot(spot_name)
    jjj:take_move_point();
    put(spot_name);
    local vital_plot=false;
    local npc_this={};
    local npc_name_this={}
    for k,v in pairs(npc) do
        local ret=v.spot_check(spot_name);
        if ret==true then
            npc_this[#npc_this+1]=v;      
            npc_name_this[#npc_name_this+1]="与"..k.."对话";
        elseif ret=="vital plot" then
            vital_plot=true;
        end
    end
    if not vital_plot then
        local spot_type=spot[spot_name].type;

        ts(spot[spot_name].default_bg);
        local behavior=spot_type_default_menu[spot_type]
        local menu=table.link(behavior,npc_name_this)
        local ret=tm(table.unpack(menu));
        put("ret",ret);
        put(behavior)
        put("wwwlkj",#behavior)
        if ret<#behavior then
            put("223423")
            spot_behavior[menu[ret+1]]();
        else
            put("w090990")
            npc_this[#behavior-ret+1].chat();
        end
        

    end
    put(spot[spot_name]);         
end


