plot=function()
    return coroutine.create(
        function(...)
            if imdeveloper then
                if p.test() then
--                    return ;
                end
            end            
            local args={...};
--            put(args)
            if args[1]=="spot" then
                local spot=args[2];
                local env={}
                for j,k in pairs(npc) do 
                    if k.spot_check then
                        local state=k.spot_check(spot);
                        if state==true then
                            table.insert(env,npc);
                        elseif state==1 then
                            return; 
                        end
                    end
                end
--                put(env)
                enter_spot(spot);
                exit();
            end

            

            if not v.plot.start then

                local start_value=false;
                while not start_value do
                    start_value=p.start()
                    if start_value=="cover" then
                        return;
                    end
                end
                v.plot.start=true;
                p.nature_test();
                p.xuanjianghui();
            else
            --                ts()
            end

        end
    )
end