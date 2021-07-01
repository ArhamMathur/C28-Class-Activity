class Chain
{

    constructor(mya,myb)
    {
        var opt ={

            bodyA:mya,
            bodyB: myb,
            stiffness:0.04,
            length:10

        }
        this.chain = Constraint.create(opt);
        World.add(world,this.chain);
    }

    display()
    {

        var a = this.chain.bodyA.position;
        var b = this.chain.bodyB.position;
        push();
        stroke("green");
        line(a.x, a.y, b.x, b.y)
        pop();
        
    }
}