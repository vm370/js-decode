function decode ()  /* like oracle decode */
    {
        const args = Array.prototype.slice.call(arguments);
        const v_key = args.shift();
        let iv;
        	
        for (let i=0, ii=args.length; i < ii; i += 2 ) {
            if ( (i + 1) === ii ) {
                iv =  args[i];
                break;
            }
            
            if ( v_key === args[i] && ( (i + 1) < ii ) ) {
                iv = args[i+1];
                break;
            }
        }

        return typeof iv === 'function' ? iv(v_key) : iv;
  };

